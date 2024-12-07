import { useLocation, useParams } from 'react-router-dom';

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
  const location = useLocation();
  const parentParams = useParams(); //get parent params here
  const { childId } = useParams();

  const parentId = location.pathname.split('/')[2]; //Extract parent ID from pathname

  return (
    <div>
      <h1>Parent ID (from location): {parentId}</h1>
      <h1>Child Route: {childId}</h1>
      <h1>Parent ID (from useParams): {parentParams.id}</h1>
    </div>
  );
}

//Alternative solution using a parent component to pass down data: 
function ParentRouteWithState(){
  const [parentId, setParentId] = useState(null);
  useEffect(() => {
    const { id } = useParams();
    setParentId(id);
  }, [useParams()]);

  return(
    <div>
        <ChildRouteWithProps parentId={parentId}/>
    </div>
  )
}

function ChildRouteWithProps({parentId}){
  return(
    <div>
      <h1>Parent ID from parent component: {parentId}</h1>
    </div>
  )
}