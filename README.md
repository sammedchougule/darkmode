If a user switches to dark mode on a website, i want the preference to be remembered even after the page is refreshed. Typically, this is done by saving the user's preference (dark or light mode) in either localStorage or cookies so that the setting persists across page loads.

Here's how it works and how you can implement it:

1. Saving the Preference:
When the user clicks the button to toggle between dark and light modes, store their choice in the browser’s localStorage (or cookies).
2. Checking the Preference on Page Load:
When the page loads, check localStorage (or cookies) for the saved preference. If the user previously selected dark mode, apply it automatically; otherwise, the page defaults to light mode.
