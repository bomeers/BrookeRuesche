import React, { useState } from "react";
import { Grid, TextField, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Select, MenuItem, Slider, Button } from '@mui/material';

const defaultValues = {
    height: {
        feet: 0,
        inches: 0
    },
    weight: 0
};

const Form = () => {

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value, });
    };

    const calculateBMI = (event) => {
        event.preventDefault();
        var height = (formValues.height.inches + (formValues.height.feet * 12)) * .025;
        var weight = formValues.weight * .45;
        var BMI = (weight / Math.pow(height, 2));
        console.log(BMI);
        // return BMI
    }

    return (
        <form onSubmit={calculateBMI}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="outlined-start-adornment"
                        name="height-feet"
                        label="Height (feet)"
                        type="number"
                        value={formValues.height.feet}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-start-adornment"
                        name="height-inches"
                        label="Height (inches)"
                        type="number"
                        value={formValues.height.inches}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-start-adornment"
                        name="weight"
                        label="Weight"
                        type="number"
                        value={formValues.weight}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    );
};
export default Form;