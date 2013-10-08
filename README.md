# IronRouter Login Example with Custom Profile Field

A little example to demonstrate how to handle authentication using a combination of [IronRouter](https://github.com/EventedMind/iron-router) and the `accounts-google`, `accounts-ui` packages.

It includes an additional check to see if the user has already set a custom profile field called 'company'. If not, it will continue to redirect them to the update profile page. Once the user has authenticated and has set a valid company name they will be able to access their `dashboard`.

# Packages used

[IronRouter](https://github.com/EventedMind/iron-router)

`accounts-ui`

`accounts-google`

# Packages removed

`autopublish` was removed to show to how use the pub/sub properly

# Publish / Subscribe

/server/publications/users.js has a custom publish setup that includes the profile fields (including our custom company field).

It also contains the allow update on the users collection.

/client/subscriptions/users.js shows the custom subscription that allows you to see the data.

