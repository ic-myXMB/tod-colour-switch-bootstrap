# tod-colour-switch-bootstrap

## Time of Day Auto Colour Switch for Bootstrap 5

<p align="center">
<b>Basic Bootstrap 5 custom time of day script to auto use "dark mode" in your web site during time defined as "night", else during the day such auto reverts back to "light mode".</b>
</p>

## About

This simple project was based on lightswitch, a handy js darkmode switch I often enjoying using in various bootstrap projects, but, on this particular time the simple request from the user this project was created for was that they absolutely wanted no physical switch displayed on site, and something that only required including the single js file in the html files they may use without adding any other edits related to this simple project say in thier html files and also they only wanted the dark mode to enable itself at a set time considered "night" (18 & after) and then disable itself at a set time (7 to prior to 18) for example on what they considered "morning" like 7 AM and throughout the daytime. 

Note: you can edit the js script if needed if these defined times are not to your needs and edit the area defining 7, 12, 18, etc, etc. 

## Under the hood

Switching to dark mode is done by the script at a predefined time of day and as such then triggers functions that includes replacments for `-dark` or `-light` as a class. Performed by DOM manipulation using JavaScript based on the default system theme. **Local storage** is used to save the choice under the name: _colourSwitch_

## Installing

- Download the "tod-colourswitch.js" file

## Usage

Simply reference the `tod-colourswitch.js` script in your html file:

```html

<!-- TOD Colour Switch -->
<script src="tod-colourswitch.js" />
```

### About Usage

Designed for the plain Bootstrap 5 theme. If you're using custom themes then, you will probably have to customize it for better results.
