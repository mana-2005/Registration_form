function validate() 
{
    let fullName = document.getElementById("fullName").value.trim();
    let nameError = false;
    alert(fullName);

    let myName = fullName.split(" ");
    if (myName.length >= 3) 
    {
        alert("First name: " + myName[0]);
        alert("Middle name: " + myName[1]);
        alert("Last name: " + myName[2]);
    } 
    else 
    {
        alert("Full name should have at least first, middle, and last name.");
        nameError = true; 
    }

    let aadharNo = Number(document.getElementById("aadhar").value);
    let aadharError = false;
    if (aadharNo.toString().length !== 12) 
    {
        alert("Aadhar number should be exactly 12 digits.");
        aadharError = true; 
    } 
    else 
    {
        alert("Aadhar Number: " + aadharNo);
    }

    let pan = document.getElementById("pan").value.trim();
    let panError = false;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (panPattern.test(pan)) 
    {
        alert("PAN Card number is : " +pan);
    }
    else 
    {
        alert("Invalid PAN Card number. Please enter a valid PAN number.");
        panError = true; 
    }

    let mobile = Number(document.getElementById("mobile").value);
    let mobileError = false;
    if (mobile.toString().length !== 10) 
    {
        alert("Mobile number should be exactly 10 digits.");
        mobileError = true; 
    } 
    else if (!/^[6-9]/.test(mobile)) 
    {
    alert("Mobile number should start with 6, 7, 8, or 9.");
    mobileError = true;
    }
    else 
    {
        alert("Mobile Number: " + mobile);
    }

    let dob = document.getElementById("dob").value.trim();
    let dobError = false;
    let today = new Date();
    let dobDate = new Date(dob);
    if (dobDate.getTime() >= today.getTime()) 
    {
        alert("Date of Birth should be in the past.");
        dobError = true; 
    } 
    else 
    {
        alert("Date of Birth: " + dob);
    }

    let marks = document.getElementById("marks").value.trim();
    let marksError = false;
    let marksArray = marks.split(",").map(mark => parseInt(mark.trim())).filter(Number.isInteger);
    if (marksArray.length !== 6) 
    {
        alert("Please enter marks for exactly 6 subjects.");
        marksError = true; 
    } 
    else 
    {
        alert("Marks: " + marksArray.join(", "));
    }

    if (!marksError) 
    {
        let bestFive = marksArray.sort((a, b) => b - a).slice(0, 5);
        let percentage = (bestFive.reduce((acc, mark) => acc + mark, 0)) / bestFive.length;
        alert("Percentage is: " + percentage + "%");
    }

   
    if (nameError || aadharError || panError || mobileError || dobError || marksError) 
    {
        return false; 
    }
    else
    {
    	alert("Successfully Registered...");
    	document.getElementById("fullName").value = "";
    	document.getElementById("aadhar").value = "";
    	document.getElementById("pan").value = "";
    	document.getElementById("mobile").value = "";
    	document.getElementById("dob").value = "";
    	document.getElementById("marks").value = "";

    }
}
