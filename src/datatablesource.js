export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field:"user", headerName:"User", width: 230, renderCell: (params)=>{
            return(
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email", headerName:"Email", width:230,
    },
    {
        field:"age", headerName:"Age", width:100,
    },
    {
        field:"status", 
        headerName:"Status",
        width:160,
        renderCell: (params)=>{
            return(
                <div className={` cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }
]


//temporary data
export const userRows = [{
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    age: 42,
    email:"1snow@gmail.com",
    status: "active"
    
    
},
{
id: 2,
username: "Jamie Lannister",
img: "https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"2snow@gmail.com",
age: 42,
status: "pending",
},
{
id: 3,
username: "Lannister",
img: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"3snow@gmail.com",
age: 42,
status: "active",
},
{
id: 4,
username: "cersie",
img: "https://images.pexels.com/photos/445986/pexels-photo-445986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"4snow@gmail.com",
age: 42,
status: "passive",
},
{
id: 5,
username: "roxie",
img: "https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"5snow@gmail.com",
age: 42,
status: "active",
},
{
    id: 6,
    username: "harvey",
    img: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    age: 42,
    email:"1snow@gmail.com",
    status: "passive",
    
    
},
{
id: 7,
username: "Jam",
img: "https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"2snow@gmail.com",
age: 42,
status: "passive",
},
{
id: 8,
username: "Lan",
img: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"3snow@gmail.com",
age: 42,
status: "active",
},
{
id: 9,
username: "ritz",
img: "https://images.pexels.com/photos/445986/pexels-photo-445986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"4snow@gmail.com",
age: 42,
status: "pending",
},
{
id: 10,
username: "stark",
img: "https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
email:"5snow@gmail.com",
age: 42,
status: "active",
}]