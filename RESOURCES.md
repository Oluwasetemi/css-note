# CSS Container Query Resources

## Knowledge

- [A Friendly Introduction to Container Queries — Josh W. Comeau](https://www.joshwcomeau.com/css/container-queries-introduction/)
  Builds the mental model: local responsiveness, the circular-dependency problem, containment, and the “you can’t change what you measure” rule. Use for fundamentals.
- [Container Queries Unleashed — Josh W. Comeau](https://www.joshwcomeau.com/css/container-queries-unleashed/)
  Demonstrates the key application pattern: media queries control the page shell while container queries control sub-layouts, including layouts whose width can increase as the viewport shrinks. Use for practical design decisions and named containers.
- [MDN: `@container`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@container)
  Primary syntax reference for size conditions, named containment contexts, and the dimensions that queries measure. Use when writing or checking query syntax.
- [MDN: `container-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/container-type)
  Defines `normal`, `inline-size`, and `size`, including the containment behavior that prevents size-query feedback loops. Use when choosing a containment axis.
- [MDN: `container` shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/container)
  Documents `container: <name> / <type>` and its relationship to `container-name` and `container-type`. Use for named-container syntax.
- [CSS Conditional Rules Module Level 5](https://drafts.csswg.org/css-conditional-5/)
  The underlying specification for container queries. Use to resolve precise or disputed behavior.

## Wisdom (Communities)

- [CSS-Tricks Forums](https://css-tricks.com/forums/)
  A CSS-focused practitioner community. Use for reviewing real layout trade-offs and debugging reduced examples.
- [Stack Overflow: CSS container queries](https://stackoverflow.com/questions/tagged/css-container-queries)
  Searchable real-world questions and edge cases. Use after reducing a problem to a minimal reproducible example.
