import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import TabPanel from '@mui/lab/TabPanel';

// icons
import LinkIcon from "@mui/icons-material/Link";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Settings = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding:0}}>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <Card>XXX</Card>
          </Grid>
          <Grid item xs={7}>
            <Card sx={{ padding: "10px 40px" }}>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  marginBottom: "0px",
                }}
              >
                Custom webHooks
              </p>
              <p
                style={{ fontSize: "14px", fontWeight: 400, color: "#717579" }}
              >
                Customize your agent’s name and greeting messages
              </p>

              <FormControl fullWidth sx={{ marginTop: "40px" }}>
                <p style={{ fontSize: "16px", fontWeight: 500 }}>Action Name</p>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={age}
                  placeholder="Custom webhook"
                >
                  <MenuItem value={10}>custom webhook</MenuItem>
                  <MenuItem value={11}>custom webhook</MenuItem>
                </Select>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Event
                </p>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>custom webhook</MenuItem>
                  <MenuItem value={11}>custom webhook</MenuItem>
                </Select>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Method
                </p>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>custom webhook</MenuItem>
                  <MenuItem value={11}>custom webhook</MenuItem>
                </Select>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  URL
                </p>
                <TextField
                  inputProps={{ "aria-label": "Without label" }}
                  id="outlined-start-adornment"
                  placeholder="http://domainname.com"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Authorization
                </p>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>custom webhook</MenuItem>
                  <MenuItem value={11}>custom webhook</MenuItem>
                </Select>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Headers
                </p>
                <div
                  style={{
                    height: "33px",
                    width: "130px",
                    borderRadius: "20px",
                    backgroundColor: "#2196F333",
                    padding: "5px 12px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <AddCircleOutlineIcon style={{ color: "#304FFE" }} />
                    &nbsp;
                    <p
                      style={{
                        color: "#304FFE",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      ADD ITEM
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Query Parameters
                </p>
                <div
                  style={{
                    height: "33px",
                    width: "130px",
                    borderRadius: "20px",
                    backgroundColor: "#2196F333",
                    padding: "5px 12px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <AddCircleOutlineIcon style={{ color: "#304FFE" }} />
                    &nbsp;
                    <p
                      style={{
                        color: "#304FFE",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      ADD ITEM
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Content-Type
                </p>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>application/json</MenuItem>
                  <MenuItem value={11}>custom webhook</MenuItem>
                </Select>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop: "13px",
                  }}
                >
                  Raw Body
                </p>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>application/json</MenuItem>
                  <MenuItem value={11}>custom webhook</MenuItem>
                </Select>
              </FormControl>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Settings;
