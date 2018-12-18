# Firefox addon CORS bug

This project demonstrates a bug with Firefox add-on permissions and CORS.

## Instructions

1. Run `yarn` or `npm install` to install dependencies
2. Run `yarn start` or `npm start` to start our CORS-less server
3. Zip up the contents of `extension/` (Not the folder, but all of its contents)
4. Go to `about:debugging#addons` in Firefox, and load the ZIP as a temporary addon
5. Go to `about:addons` and go to the Preferences page of the extension
6. Click the button, and see the CORS exception in your console
7. Load the addon in another browser (e.g. Chrome) and do the same
8. Confirm that it worked this time
