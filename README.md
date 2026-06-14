<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internshala Assignment</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; background: #f0f2f5; padding: 20px; }
        .form-box { max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h2 { text-align: center; color: #1877f2; margin-bottom: 20px; }
        label { display: block; margin-top: 12px; font-weight: 600; }
        input, select, textarea { width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ddd; border-radius: 6px; }
        .radio, .checkbox { width: auto; margin-right: 5px; }
        .radio-label, .check-label { font-weight: normal; display: inline; margin-right: 15px; }
        button { width: 100%; padding: 12px; background: #1877f2; color: white; border: none; border-radius: 6px; font-size: 16px; margin-top: 20px; cursor: pointer; }
        @media (max-width: 600px) { .form-box { padding: 15px; } }
    </style>
</head>
<body>
    <div class="form-box">
        <h2>Student Registration Form</h2>
        <form>
            <label>Full Name</label>
            <input type="text" placeholder="Enter name" required>
            
            <label>Email</label>
            <input type="email" placeholder="Enter email" required>
            
            <label>Mobile Number</label>
            <input type="number" placeholder="Enter mobile" required>
            
            <label>Select Course</label>
            <select required>
                <option value="">Select</option>
                <option>Web Development</option>
                <option>Python</option>
            </select>
            
            <label>Gender</label>
            <label class="radio-label"><input type="radio" class="radio" name="gender" required> Male</label>
            <label class="radio-label"><input type="radio" class="radio" name="gender"> Female</label>
            
            <label>Skills</label>
            <label class="check-label"><input type="checkbox" class="checkbox"> HTML</label>
            <label class="check-label"><input type="checkbox" class="checkbox"> CSS</label>
            
            <label>Message</label>
            <textarea rows="3" placeholder="Why join?" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
