# Lead Frontend assignment

# **Use React JS for the Assignment**
**Design:** 

**Display state:**
![image](https://github.com/nimishsara12/quicksell_assignment/assets/84761132/3e3d258f-9295-4213-a404-60af8b356255)


State based on display. - Grouping by user is selected.
![image](https://github.com/nimishsara12/quicksell_assignment/assets/84761132/a0f13250-2ab7-4600-b5de-a119860cae5f)

Grouping by priority is selected.
![image](https://github.com/nimishsara12/quicksell_assignment/assets/84761132/83c2b384-0502-4547-8f4b-c90c029e519b)

Card:
![image](https://github.com/nimishsara12/quicksell_assignment/assets/84761132/e8826ee1-18ad-464c-a9e3-25e452be95a6)

Api Used :  https://api.quicksell.co/v1/internal/frontend-assignment 
When a user clicks the "display" button and selects a grouping option, the Kanban board should dynamically adjust to reflect the user's choice.

The application should offer three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users should also be able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

The Kanban board should be responsive and visually appealing, with a design similar to the provided screenshots. 

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)**

4 - Urgent

3 - High

2 - Medium

1 - Low

0 - No priority

Additionally, the application should save the user's view state even after page reload.
