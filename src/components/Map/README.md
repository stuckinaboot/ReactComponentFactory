# Module Name

Short description

## Overview

Longer description

## Getting Started

### Install

`npm install ...`

### Example

**For simplicity, here's example code and output so you can start building right away**

#### Code

```

```

## Properties

```

```

## Quick pointers

## Future

### Animate a marker

Add this code in the component that has Map as a child (e.g. App.js in RCF). In future, we could make an AnimatedMarker component that will move the marker from point A to point B and encapsulate that logic in a single component

```
const [marker1Point, setMarker1Point] = React.useState({
  lat: 40.6892,
  long: -74.0445,
});
const pt = React.useRef({
  lat: 40.6892,
  long: -74.0445,
});

// Animates the marker.
// Note: this will also re-render the whole map, which
// will reset the map's center as well to its center prop
React.useEffect(() => {
  setInterval(() => {
    pt.current = {
      lat: pt.current.lat + 0.001,
      long: pt.current.long + 0.001,
    };
    setMarker1Point({ lat: pt.current.lat, long: pt.current.long });
  }, 1000);
}, []);
```
