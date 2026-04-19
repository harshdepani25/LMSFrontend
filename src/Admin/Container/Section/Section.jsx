import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, Formik } from "formik";
import { mixed, object, string } from "yup";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextForm from "../../Component/TextForm/TextForm";
import { useGetallcourseQuery } from "../../../redux/Api/Course.api";
import {
  useAddSectionMutation,
  useDeleteSectionMutation,
  useGetAllSectionQuery,
  useUpdateSectionMutation,
} from "../../../redux/Api/Section.api";

function Section(props) {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState({});

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data } = useGetallcourseQuery();

  console.log("CourseAllData:", data);

  const DropData = [{ value: "", label: "--Select Course--" }];

  console.log(DropData);

  data?.data?.filter((v) => {
    DropData.push({ value: v._id, label: v.name });
  });

  const { data: Section } = useGetAllSectionQuery();

  console.log("AlldataSection", Section);

  const [addSection] = useAddSectionMutation();

  const [updataSection] = useUpdateSectionMutation();

  const [deleteSection] = useDeleteSectionMutation();

  const handleDelete = async (id) => {
    console.log(id);
    deleteSection(id);
  };

  const handleEdit = async (val) => {
    console.log("val", val);
    handleClickOpen();
    setUpdate(val);
  };

  const columns = [
    {
      field: "course_id",
      headerName: "Course",
      width: 150,
      renderCell: (params) => {
        const courseObj = data?.data?.find(
          (v) => v._id === params.row.course_id,
        );

        return courseObj ? courseObj.name : "null";
      },  
    },
    { field: "name", headerName: "name", width: 150 },
    { field: "desciption", headerName: "desciption", width: 150 },
    {
      field: "Action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row._id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  let userSchema = object({
    course_id: string().required(),
    name: string().required("Please Enter Name"),
    desciption: string().required("Please Enter Description"),
  });

  return (
    <>
      <h1>Section</h1>

      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Section
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Section Deatils</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={
                Object.keys(update).length > 0
                  ? update
                  : {
                      course_id: "",
                      name: "",
                      desciption: "",
                    }
              }
              validationSchema={userSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                if (Object.keys(update).length > 0) {
                  updataSection({ ...values, _id: update._id });
                } else {
                  console.log("handleSubmit", values);
                  addSection(values);
                }

                resetForm();
                handleClose();
              }}
            >
              <Form id="subscription-form">
                <TextForm
                  name="course_id"
                  id="course_id"
                  select
                  label="Select Course"
                  style={{ margin: "0", padding: "0" }}
                  slotProps={{
                    select: {
                      native: true,
                    },
                  }}
                  data={DropData}
                />

                <TextForm name="name" id="name" label="Name" />

                <TextForm
                  name="desciption"
                  id="desciption"
                  label="Description"
                />
              </Form>
            </Formik>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" form="subscription-form">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <DataGrid
          getRowId={(row) => row._id}
          rows={Section?.data || []}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </React.Fragment>
    </>
  );
}

export default Section;
