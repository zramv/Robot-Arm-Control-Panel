# Robot Arm Control Panel
A simple web-based control panel for managing a 6-servo robot arm. Users can adjust servo angles, save named poses, and execute motion sequences stored in a database.
## Database Structure
Two main tables are used:
- **poses**: stores positions (servo angles)
- **run**: store current pose that are execute by the robot arm

## Some Features 
- Web interface with 6 inputs to control 6 servo motors
- Save and delete poses
- Load and run poses

## Main Files 
1. **get_run_pose.php**: This file retrieves the run table from database.
3. **update_status.php**: This file update the status of the pose in run table (0 or 1).

## Technology Used
- PHP (backend)
- MySQL (database)
- HTML/CSS/JavaScript (frontend)
- AJAX

## Preview

https://github.com/user-attachments/assets/d3a8630b-5731-4cae-b321-b75ce6ee9d8c

