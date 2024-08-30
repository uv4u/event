import "../Css/Authentication.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const OtpScreen = () => {
  return (
    <div>
      <div className="right-text">
        <div className="auth-heading-text">
          <h3 style={{ fontWeight: "800" }}>Verify your mobile number</h3>
        </div>
        <div className="auth-body-text">
          <h6 style={{ fontWeight: "600", fontSize: 14 }}>
            Enter the otp sent to xyz. Change Number
          </h6>
        </div>
        <div className="otp-fields d-flex" style={{ gap: "5px" }}>
          <div>
            <TextField
              variant="standard"
              id="field1"
              onChange={(e) => {}}
              sx={{ width: "63px" }}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              id="field2"
              onChange={(e) => {}}
              sx={{ width: "63px" }}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              id="field3"
              onChange={(e) => {}}
              sx={{ width: "63px" }}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              id="field4"
              onChange={(e) => {}}
              sx={{ width: "63px" }}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              id="field5"
              onChange={(e) => {}}
              sx={{ width: "63px" }}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              id="field6"
              onChange={(e) => {}}
              sx={{ width: "63px" }}
            />
          </div>
        </div>
        <div className="resend-button">
          <a href="#"> Resend otp</a>
        </div>
        <div className="verify-button">
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "50px",
              height: "56px",
              width: "387px",
            }}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
