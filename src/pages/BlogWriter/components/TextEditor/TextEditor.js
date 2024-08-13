import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Box,
  Toolbar,
  IconButton,
  Paper,
  GlobalStyles,
  TextField,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import H1Icon from "./CommonComponents/customIcons/H1Icon";
import H2Icon from "./CommonComponents/customIcons/H2Icon";
import H3Icon from "./CommonComponents/customIcons/H3Icon";
import PIcon from "./CommonComponents/customIcons/PIcon";
import TurndownService from "turndown";

const CustomToolbar = () => (
  <Toolbar
    id="toolbar"
    sx={{
      justifyContent: "flex-start",
      padding: "10px",
      backgroundColor: "#F6F6F6",
      borderBottom: "1px solid #E1E1E1 !important",
    }}
  >
    <IconButton value="1" className="ql-header">
      <H1Icon />
    </IconButton>
    <IconButton value="2" className="ql-header">
      <H2Icon />
    </IconButton>
    <IconButton value="3" className="ql-header">
      <H3Icon />
    </IconButton>
    <IconButton value="" className="ql-header">
      <PIcon />
    </IconButton>
    <IconButton className="ql-bold">
      <FormatBoldIcon />
    </IconButton>
    <IconButton value="bullet" className="ql-list">
      <FormatListBulletedIcon />
    </IconButton>
  </Toolbar>
);

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  const turndownService = new TurndownService();

  const handleEditorChange = (content) => {
    console.log("Editor Content:", content);
    setEditorContent(content);
    const markdown = turndownService.turndown(content);
    setMarkdownContent(markdown);
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };

  return (
    <Box
      sx={{
        width: "830px",
        height: "auto",
        margin: "0 auto",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "11px",
      }}
    >
      <GlobalStyles
        styles={{
          ".ql-toolbar.ql-snow": {
            border: "none",
            boxSizing: "border-box",
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            padding: "8px",
          },
        }}
      />
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "auto",
          padding: "10px",
          boxSizing: "border-box",
          borderRadius: "11px",
          backgroundColor: "#F6F6F6",
          marginBottom: "20px",
        }}
      >
        <CustomToolbar />
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={modules}
          theme="snow"
          style={{
            height: "300px", // Adjust height for the editor
            overflowY: "auto",
            backgroundColor: "#F6F6F6",
            padding: "10px",
            borderRadius: "11px",
            boxSizing: "border-box",
            border: "none",
          }}
        />
      </Paper>
      <TextField
        label="Markdown Output"
        multiline
        rows={10}
        value={markdownContent}
        variant="outlined"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "11px",
        }}
      />
    </Box>
  );
};

export default TextEditor;
