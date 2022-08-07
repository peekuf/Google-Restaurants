import { Card, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from "axios";

const AssignmentTwo = () => {

    const [restaurants, setRestaurants] = useState<any[]>([])
    const [search, setSearch] = useState<string>('Bang sue')

    useEffect(() => {
        findAllRestaurants()
    }, [search])

    const findAllRestaurants = async () => {

        const url = "http://localhost:3000/maps/api/place/autocomplete/json"
        const params = new URLSearchParams();

        params.append("input", search);
        params.append("type", "restaurant");
        params.append("components", "country:th");
        params.append("language", "th");
        params.append("key", "AIzaSyA-aROEZNcBkb6dPd1qwGiUmhIPxPMM6Uo");

        const _url = `${url}?${params.toString()}`
        await axios.get(_url).then(response => {
            console.log(response, "response")
            setRestaurants(response.data.predictions)
        }).catch(error => {
            return error;
        });

    }

    const columns: GridColDef[] = [
        { headerName: 'place_id', field: 'place_id', width: 400, },
        { headerName: 'description', field: 'description', width: 735, },
    ];

    return (
        <>
            <Card style={{ margin: "25px" }}>

                <TextField id="outlined-basic" label="Search" variant="outlined" defaultValue={search} onChange={(e: any) => { setSearch(e.target.value) }} style={{ margin: "25px" }} />
                <br />
                <div style={{ height: 400, width: '95%', margin: "25px" }}>
                    <DataGrid
                        rows={restaurants}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(row) => row.place_id}
                    />
                </div>
            </Card>
        </>
    )

}

export default AssignmentTwo