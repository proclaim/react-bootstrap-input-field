# React Input Field (bootstrap)

React input field is a react component that will handle input component for you  
**Demo**: http://jsbin.com/qucoca

###Properties
- type - 'default' or 'withIcon'
- name - identifier for onChange event (id)
- label - label to be displayed
- value - default value if specified
- iconText - text used when using type 'withIcon'
- iconClassName - class name used with type 'withIcon', if provided will overwrite iconText
- placeholder - place holder text
- inputType - 'text' || 'password' || 'number' || 'range' || 'email'
- inputSize - 'small' || 'large'
- required - true / false
- onChange - function to be call back: [ name (string), value(string), isValidInput (bool) ]
- min - miniumun for inputType 'range'
- max - maximum for inputType 'range'
- validationRegex - regular expression for validation to validate input

License
----

MIT