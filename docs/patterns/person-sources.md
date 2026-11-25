# Person sources (`people.json` -> `sources`)

Optional array on any person record:

```json
"sources": [
  { "label": "1864 marriage, Naas civil register", "url": "https://..." }
]
```

- Rendered as a "Sources" list at the bottom of `/people/<slug>`; the section is omitted when the array is missing or empty.
- Only `http(s)` URLs become links. A label with no URL (or a non-web URL) shows as plain text, so a citation without a link is still allowed.
- Most records have no `sources` key at all; add it only when there is something to list (keeps the 226-record diff small).
- Put links here, not in `notes`. Notes stay readable prose; a plain-text citation in notes (e.g. "civil marriage register, Naas Union, 1864, entry 5") is fine.
