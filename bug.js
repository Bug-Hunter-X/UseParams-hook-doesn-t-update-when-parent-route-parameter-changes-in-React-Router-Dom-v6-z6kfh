In React Router Dom v6, if you have a nested route structure and are using the `useParams` hook to access parameters from a parent route, you might encounter an unexpected behavior where the params are not updated when you navigate between nested routes.

For example:

```javascript
import { useParams } from 'react-router-dom';

function ParentRoute() {
  let { id } = useParams();
  return (
    <div>
      <h1>Parent Route: {id}</h1>
      <Routes>
        <Route path=":childId" element={<ChildRoute />}/>
      </Routes>
    </div>
  );
}

function ChildRoute() {
  let { childId } = useParams();
  return (
    <div>
      <h1>Child Route: {childId}</h1>
    </div>
  );
}
```

If you navigate to `/parent/123/child/456`, `ParentRoute` will correctly display `id` as `123`, but `ChildRoute` will display `childId` as `456`.

However, if you then navigate to `/parent/789/child/101`, `ParentRoute` will update `id` to `789` as expected, but `ChildRoute` will still display `childId` as `456`.  The `useParams` hook in `ChildRoute` won't reflect the change in the parent route's parameter unless you also explicitly change the `childId` parameter. This is because `useParams` does not re-render when a parent route's parameters change.