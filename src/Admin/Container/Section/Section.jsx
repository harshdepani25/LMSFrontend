import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextForm from "../../Component/TextForm/TextForm";
import { useGetallcourseQuery } from "../../../redux/Api/Course.api";
import { object, string } from "yup";
import { Form, Formik } from "formik";

function Section(props) {
  const { data, error, isLoading } = useGetallcourseQuery();
  console.log(data?.data);

  const [allsection, setAllSection] = useState([]);

  let sectionData = [
    {
      value: null,
      label: "--Select Categroy--",
    },
  ];

  useEffect(() => {
    data?.data?.map((v) => {
      sectionData.push({ value: v._id, label: v.name });
    });

    setAllSection(sectionData);

    console.log(sectionData);
  }, [data]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sectionSchema = object({
    categories_id: string().required("Course requied Field"),
    name: string().required(),
    desciption: string().required(),
  });

  return (
    <>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Section
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Section</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={
                // updateData
                //   ? updateData
                // :
                {
                  name: "",
                  desciption: "",
                  course_id: "",
                }
              }
              validationSchema={sectionSchema}
              onSubmit={(values) => {
                console.log("values", values);
                handleClose();
              }}
            >
              <Form id="subscription-form">
                <TextForm
                  id="course_id"
                  name="course_id"
                  label="Select course"
                  select
                  slotProps={{
                    select: {
                      native: true,
                    },
                  }}
                  data={setAllSection}
                />

                <TextForm id="name" name="name" label="Section Name" />

                <TextForm
                  id="desciption"
                  name="desciption"
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
      </React.Fragment>
    </>
  );
}

export default Section;
