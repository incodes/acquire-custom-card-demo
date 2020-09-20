# Acquire Custom Card Demo


**Description:**

* Recieve Acquire Fields on the given Url (server), whenever the Custom Card App is opened in Acquire.
* Process these data and perfom operations on your server. (which can depends upon your business model or specific feature)
* Render your Custom Template in Acquire dashboard Plugin View, eg- Cards, Forms etc.
* Send this Custom Template in the response.


**Working:**

* When Custom Card is opened in Acquire Dashboard, A GET request to given URI is called with Authorization Token(optional).
* Some part of url will be dynamic, by setting up which Acquire fields you want to use.
* In your Server Side this endpoint must be active and must return a html template (client-side view) in response.



**Settings Example**

* Your Custom template Url.
* We support Bearer and Basic Authorization. 

```
//enter url
https://example.com/customer?field={{Contact.email}}

// enter Bearer auth
Bearer <token>

// or encrypt user:password and enter basic auth
key =  Base64Encoded(<user:password>)
Basic <key>
```

