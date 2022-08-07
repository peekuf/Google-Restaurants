import { Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const AssignmentThree = () => {

    const array: any[] = ["X", 5, 9, 15, 23, "Y", "Z"]
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const [z, setZ] = useState<number>(0)

    useEffect(() => {
        Cal(array)
    }, [])

    const Cal = (array: any[]) => {

        array.forEach((number: any, index: number) => {
            if (number === "X") {
                const ans = array[index + 1] - (index + 2)
                setX(ans)
            } else if (number === "Y") {
                const ans = array[index - 1] + (index * 2)
                setY(ans)
            } else if (number === "Z") {
                const ans = y + (index * 2)
                setZ(ans)
            }
        })
    }

    return (
        <>
            <Card style={{ margin: "25px" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <h1>Assignment 1</h1>
                        <p><b>Proposition</b> : X, 5, 9, 15, 23, Y, Z - Create a function for finding X, Y, Z value and create a new page for showing results.</p>
                        <p><b>Answer</b> : X = {x}, Y = {y}, Z = {z}</p>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )

}

export default AssignmentThree 