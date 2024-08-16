import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { FieldArray, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import BlogWriterCard from "../Card/Card";
import ReferenceCard from "./components/Card/Card";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const References = ({ setActiveStep, references }) => {
  const { setFieldValue } = useFormikContext();
  const [selectedReferences, setSelectedReferences] = useState([]);
  const [dynamicReferences, setDynamicReferences] = useState([""]);

  const handleSelect = (reference) => {
    const isSelected = selectedReferences.includes(reference.url);
    if (isSelected) {
      setSelectedReferences(
        selectedReferences.filter((r) => r !== reference.url)
      );
    } else {
      setSelectedReferences([...selectedReferences, reference.url]);
    }
  };
  useEffect(() => {
    setFieldValue("references", selectedReferences);
  }, [selectedReferences, setFieldValue]);

  const handleAddMore = () => {
    setDynamicReferences([
      ...dynamicReferences,
      { title: "", source: "Custom" },
    ]);
    setFieldValue("references", [...selectedReferences, ...dynamicReferences]);
  };

  return (
    <BlogWriterCard
      title="Select Reference Articles"
      handleNext={() => setActiveStep(2)}
      handleBack={() => setActiveStep(0)}
      width={1163}
      marginTop={60}
      backButtonLabel="Blog Topic"
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 50,
          marginTop: 5,
          marginBottom: 20,
        }}
      >
        <Typography style={{ fontSize: 14, color: "#4D4D4D", maxWidth: 659 }}>
          Select reference articles to guide the content of your blog post. You
          can filter and sort articles by relevance, date, or popularity. Click
          on an article to read a preview and select the ones that best match
          your topic and objectives. You can choose multiple articles.
        </Typography>

        <Box style={{ display: "flex", flexDirection: "column", rowGap: 30 }}>
          <Box
            sx={{ borderBottom: 1.75, borderColor: "#F5F5F5", display: "flex" }}
          >
            <Typography
              sx={{
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#2D333A",
                },
                paddingBottom: "5px",
                fontSize: 12,
              }}
            >
              Recommended
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {references.map((reference, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ReferenceCard
                  reference={reference}
                  onSelect={() => {
                    handleSelect(reference);
                    setFieldValue("references", selectedReferences);
                  }}
                  isSelected={selectedReferences.includes(reference.url)}
                />
              </Grid>
            ))}
          </Grid>

          <Card
            sx={{
              padding: "18px 30px 18px 27px",
              borderRadius: "11px",
              border: "1px solid rgba(186, 193, 201, 0.5)",
              display: "flex",
              flexDirection: "column",
              rowGap: 1.4,
              boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.05)",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <Typography style={{ fontSize: 22, fontWeight: 500 }} variant="h3">
              Or enter your own reference articles
            </Typography>{" "}
            <FieldArray name="references">
              {({ push }) => (
                <>
                  {dynamicReferences.map((_, index) => (
                    <TextField
                      placeholder="https://"
                      key={index}
                      onChange={(event) => {
                        const updatedReferences = [...dynamicReferences];
                        updatedReferences[index] = event.target.value;
                        setDynamicReferences(updatedReferences);
                        setFieldValue("references", [
                          ...selectedReferences,
                          ...updatedReferences,
                        ]);
                      }}
                      sx={{
                        width: "70%",
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(0, 0, 0, 0.1)",
                          },
                        },
                      }}
                    />
                  ))}

                  <Button
                    onClick={handleAddMore}
                    sx={{
                      border: "none",
                      textTransform: "none",
                      color: "#797979",
                      alignSelf: "flex-start",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "black",
                      },
                    }}
                  >
                    <AddCircleOutlineSharpIcon
                      sx={{ marginRight: "5px", fontSize: "14px" }}
                    />{" "}
                    Add more
                  </Button>
                </>
              )}
            </FieldArray>
          </Card>
        </Box>
      </Box>
    </BlogWriterCard>
  );
};

export default References;
