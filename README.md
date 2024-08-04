# Debouncing

- typing slow - 200ms (difference between keystroke)
- typing fast - 50ms
- Debouncing with 200ms = If the difference between 2 keystroke is < 200ms - Decline the API call
- else - Make an API call.

- Cache:
- time to complexity to search in array = o(n)
- time to complexity to search in map/object = o(1)
- new Map();