import {IPatient} from "../../types/patient";
import {IReport} from "../../reports";

export default [
    function(data: IPatient): IPatient | IReport {
        // Patient IDs - where first name is missing
        if(!data["First Name"])
            return {level: "error", message: `Patient with id=${data["Member ID"]} first name does not exist`};

        return data;
    },
    function(data: IPatient): IPatient | IReport {
        // Email address is missing but consent is Y
        if(!data["Email Address"] && data["CONSENT"] === "Y")
            return {level: "error", message: `Missing Email address for user id=${data["Member ID"]} but consent = "Y"`};

        return data;
    }
];