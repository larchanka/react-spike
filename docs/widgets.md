[Back to documentation's list](./)

# Widgets

A software widget is a relatively simple and easy-to-use software application or component made for one or more different software platforms. [*](https://en.wikipedia.org/wiki/Software_widget)

Every widget have to export method `init`. This method should accept two arguments: `nodeId`, `props`.

### nodeId

Id of the block, in which widget is going to be loaded.

```html
<div id='someId' />
```

`someId` === nodeId.

### props

Object with properties for the widget/component. This object have to passed to the component without any mutations.

```json
{
  "title": "Some title",
  "image": "http://url.of/the-image.jpg",
  "data": []
}
```

## Example

```html
<body>
  <div id="root" />
  <script src="widget.js" />
</body>
```

```javascript
var options = {
  title: 'My cool widget',
  image: '/some-image-url.jpg'
};

init('root', options);
```

---

[Back to documentation's list](./)
