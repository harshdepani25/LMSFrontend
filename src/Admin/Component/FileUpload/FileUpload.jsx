import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useField } from "formik";
import { IMAGE_URL } from "../../../utility/url";
import { array } from "yup";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function FileUpload({ type, ...props }) {
  const [field, meta, helper] = useField(props);

  const { setValue } = helper;

  let filepath = " ";

  const files = Array?.from(field?.value);
  console.log("filed:", files);

  //  filepath = '/public/assets/images/courses/4by3/' + field.value;
  const fileArray = files?.map((v) => {
    console.log("1234567898765432123456789", v);

    if (v?.url) {
      return v?.url;
    } else {
      return URL?.createObjectURL(v)
    }
    // if (typeof v === "string") {
    //   return (filepath = IMAGE_URL + v.name);
    // } else if (typeof v === "object" && v !== null) {
    //   console.log("123456789", v);

    //   return (filepath = URL?.createObjectURL(v));
    // }
  });

  console.log("files array", fileArray);

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        {...props}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          multiple
          onChange={(event) => setValue(Array.from(event.target.files))}
        />
      </Button>

      {fileArray.map((v) => (
        <img src={v} alt="" width={"50px"} height={"50px"} />
      ))}

      {
        <p style={{ color: "red" }}>
          {meta.error && meta.touched ? meta.error : null}
        </p>
      }
    </>
  );
}

export default FileUpload;
