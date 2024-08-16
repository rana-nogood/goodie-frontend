import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Paper, GlobalStyles, TextField } from "@mui/material";
import TurndownService from "turndown";
import CustomToolbar from "./components/customToolbar";
import { marked } from "marked";

const TextEditor = ({ generatedOutline, setEditedBlog }) => {
  const [editorContent, setEditorContent] = useState(generatedOutline);
  const [markdownContent, setMarkdownContent] = useState("");

  const turndownService = new TurndownService();

  useEffect(() => {
    const html = marked(generatedOutline);
    setEditorContent(html);
  }, [generatedOutline]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
    const markdown = turndownService.turndown(content);
    setMarkdownContent(markdown);
    setEditedBlog(content);
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
            height: "300px",
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
