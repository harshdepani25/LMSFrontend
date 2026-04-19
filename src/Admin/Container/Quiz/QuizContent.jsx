import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { object, string } from "yup";
import { Form, Formik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextForm from "../../Component/TextForm/TextForm";
import { useGetquizQuery } from "../../../redux/Api/quiz.api";
import { NavLink, useParams } from "react-router-dom";
import {
  useAddquizContentMutation,
  useDeletequizContentMutation,
  useGetquizContentQuery,
  useUpdatequizContentMutation,
} from "../../../redux/Api/quizContent.api";

function QuizContent(props) {
  const [open, setOpen] = useState(false);
  const [updatedata, setUpdateData] = useState({});
  const param = useParams();

  console.log("iddddd", param._id);

  const { data: quiz } = useGetquizQuery();
  console.log("quiz", quiz);

  const { data: quizContent } = useGetquizContentQuery();
  console.log("quizcontent", quizContent);

  const [addData] = useAddquizContentMutation();
  const [updateData] = useUpdatequizContentMutation();
  const [deleteData] = useDeletequizContentMutation();

  const handledelete = async (id) => {
    console.log(id);
    deleteData(id);
  };

  const handleedit = (val) => {
    handleClickOpen();
    setUpdateData(val);
  };

  const paginationModel = { pae: 0, pageSize: 5 };
  const columns = [
    { field: "qustion", headerName: "Question", width: 130 },
    { field: "option", headerName: "Option", width: 130 },
    { field: "answer", headerName: "Answer", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (param) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleedit(param.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handledelete(param.row._id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const [questions, setQuestions] = useState([
    { question: "", options: [""], answer: "" },
  ]);

  const addQue = () => {
    setQuestions([...questions, { question: "", options: [""], answer: "" }]);
  };

  const removeQue = (i) => {
    const update = [...questions];
    update.splice(i, 1);
    setQuestions(update);
  }

  const addOpt = (i) => {
    const update = [...questions];
    update[i].options.push("");
    setQuestions(update);
  };
  const removeOpt = (i) => {
    const update = [...questions];
    update[i].options.splice(0, 1);
    setQuestions(update);
  };

  const handleQuestionChange = (i, value) => {
    const updated = [...questions];
    updated[i].question = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (i, value) => {
    const updated = [...questions];
    updated[i].answer = value;
    setQuestions(updated);
  };

  const handleOptionChange = (i, j, value) => {
    const updated = [...questions];
    updated[i].options[j] = value;
    setQuestions(updated);
  };

  const handleSubmit = (value) => {
    console.log("valueeeeeeeeeeeeeeee", questions);
    console.log("valueeee", value);
    
  };

  return (
    <>
      <React.Fragment>
        <h2>Quiz Content</h2>
        <form onSubmit={() => handleSubmit}>
          {questions.map((q, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <TextField
                label="Question"
                value={q.question}
                onChange={(e) => handleQuestionChange(i, e.target.value)}
                fullWidth
              />

              {q.options.map((opt, j) => (
                <TextField
                  key={j}
                  label={`Option ${j + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(i, j, e.target.value)}
                  fullWidth
                  style={{ marginTop: "10px" }}
                />
              ))}
              <Button onClick={() => addOpt(i)}>Add Option</Button>
              <Button onClick={() => removeOpt(i)}>Remove Option</Button>

              <TextField
                label="Answer"
                value={q.answer}
                onChange={(e) => handleAnswerChange(i, e.target.value)}
                fullWidth
              />

            </div>
          ))}

          <Button onClick={addQue}>
            Add Question
          </Button>
          <Button onClick={removeQue}>
            Remove Question
          </Button>
          <br />
          <br />
          <Button variant="contained" type="submit">
            Submit All Question
          </Button>
        </form>

        <br />
        <br />
        <DataGrid
          rows={quizContent?.data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          getRowId={(row) => (row ? row._id : "")}
        />
      </React.Fragment>
    </>
  );
}

export default QuizContent;