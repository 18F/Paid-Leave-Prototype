# Paid Family & Medical Leave Prototype

This prototype is being built by 18F, in partnership with the Department of Labor's Women's Bureau. Our goal is to provide a simple front end, and some guidance on potential back-end structures, so that any jurisdiction with a Paid Family Medical Leave Program can easily implement the program. Please check out the [current prototype](https://pages.18f.gov/Paid-Leave-Prototype/)

## Development
Current development is in the [18f-pages branch](https://github.com/18F/Paid-Leave-Prototype/tree/18f-pages).

## Project Management
Feel free to open an issue if you'd like to request a feature. Otherwise, you can look at our current work in progress [on Trello](https://trello.com/b/0RAkaeci/dol-paid-leave). 

## Technical Approach
With a goal of constructing a modular, extensible, lightweight easily-customizable platform, this prototype employs several notable processes:
* It is built entirely in JavaScript, to ensure that it can be hosted in any server environment.
* The application form is encoded as [JSON Schema](http://json-schema.org/), with [JSON Form](https://github.com/joshfire/jsonform) used to dynamically generate the HTML for the form. (No form data is present within [the application page's HTML](https://github.com/18F/Paid-Leave-Prototype/blob/18f-pages/_pages/claims/new.html)—it is all rendered in-browser, via JavaScript.)
* Upon submission, form contents are submitted against the JSON Schema before being submitted to a RESTful endpoint (a server to be provided by the state implementing this prototype software).

Making changes to the form and validation process can be done by modifying [the schema](https://github.com/18F/Paid-Leave-Prototype/blob/18f-pages/javascripts/schema.json), with some particular HTML customizations possible via extensions to the schema in [the form JSON](https://github.com/18F/Paid-Leave-Prototype/blob/18f-pages/javascripts/form.json). See [the JSON Form documentation](https://github.com/joshfire/jsonform/wiki) for specifics about this.

Because the form is generated from JSON, it would not be difficult to extend this prototype by adding a web-based form-building system, permitting customizations to the form without necessitating editing any JSON or HTML.
