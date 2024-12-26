```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add count to the dependency array to prevent the infinite loop
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```