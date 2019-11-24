=======
# MMM-CECviaHTTP

This MagicMirror² module allows you to control and HDMI display via http commands to your MagicMirror.

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/benrlewis7450G/MMM-CECviaHTTP
````

Install
````
cd MMM-CECviaHTTP
npm install
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-CECviaHTTP'
	}
] 
````
