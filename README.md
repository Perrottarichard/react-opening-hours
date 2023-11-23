<h1 align="center">react-opening-hours</h1>

## Installation

#### 1.Install package

To install react-opening-hours with `npm`:

    npm install react-opening-hours --save

To install react-opening-hours with `yarn`:

    yarn add react-opening-hours

## Usage

Here is a basic example of using react-opening-hours in your form.

```jsx
import OpeningHoursUnstyled from "react-opening-hours";

const MyForm = () => {
    return (
      <div style={{ maxWidth: "100%" }}>
        <OpeningHoursUnstyled
            values={{
                sun_open: 'closed',
                sun_close: 'closed',
                mon_open: '09:00:00',
                mon_close: '17:00:00',
                tue_open: '09:00:00',
                tue_close: '17:00:00',
                wed_open: '09:00:00',
                wed_close: '17:00:00',
                thu_open: '09:00:00',
                thu_close: '17:00:00',
                fri_open: '09:00:00',
                fri_close: '17:00:00',
                sat_open: 'closed',
                sat_close: 'closed',
            }}
            getValues={(values) => console.log(values)}
            ampm
            showCopyToAll
        />
      </div>
    );
  }
```

## Contributing

I'd love some feedback, suggestions, and ideas for enhancements. If you'd like to contribute, feel free to get in touch and we can talk about how to go forward.


## License

This project is licensed under the terms of the [MIT license](/LICENSE).