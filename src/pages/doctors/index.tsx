import { Grid } from '@mui/material'
import React from 'react'
import data from "./data.json"
import CustomCard from '../../components/customCards'

export default function Doctors() {
  const handleShareClick =()=> {

  }
  return (
    <>
    <Grid>List of doctors</Grid>
    <Grid container item  justifyContent={"space-around"}>

    {data?.map((data) =>(
      <CustomCard
      image={data.imageUrl}
      title={data.title}
      description={data.description}
      buttonText="Explore More"
      onButtonClick={handleShareClick}
    />
    ))}
    </Grid>

    </>
  )
}
