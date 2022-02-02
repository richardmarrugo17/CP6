import ProjectListItem from "./ProjectListItem";
import Paginator from "./Paginator";
function ProjectList(props){
  const proyectos = props.proyectos;
  const ListaProyectos = proyectos.map(p =>
    <ProjectListItem id={p.id} nombre={p.nombre} descripcion={p.descripcion} fecha={p.fecha} director={p.director}/>
  );
  return (
    <div className="container-fluid">
      <div className="card mt-5">
        <div className="card-body">
          <button id="btnRegistrarNov" className="btn btn-lg btn-success float-end">Registrar Novedades</button>
          <h3>Dashboard</h3>
          <h5 className="text-muted">Bienvenido al portal de MINTIC de Proyectos y Noticias</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto asperiores sunt 
            expedita numquam, consequatur aut ab, corrupti aliquid eius blanditiis omnis veritatis 
            dignissimos quo atque veniam doloremque esse assumenda magni!</p>
        </div>
      </div>
      <div className="list-group m-5">
        {ListaProyectos}
      </div>
      <Paginator/>
    </div>
  );   
}

export default ProjectList;