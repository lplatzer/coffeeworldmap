"use client";

import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useState} from "react";
import Link from "next/link";

export default function CoffeeRecipes() {

    const [rowData, setRowData] = useState([
        { coffee: "Kenia Geisha", roast: "Filter", origin: "Kenya", variety: ["SL-28", "SL-34", "Ruiru 11"].join(", "), process: "washed", roaster: "wand", tasteNotes: ["strawberry", "caramel", "jasmin"].join(", "), },
        { coffee: "El Limo", roast: "Espresso", origin: "El Salvador", variety: "Bourbon", process: "honey", roaster: "Five Elephant", tasteNotes: ["blueberry", "chocolate", "hazelnut"].join(", "), },
        { coffee: "Werka", roast: "Filter", origin: "Ethiopia", variety: "Heirloom", process: "natural", roaster: "elbgold", tasteNotes: ["toffee", "blackcurrant", "peanut"].join(", "), },
    ]);
    const [colDefs, setColDefs] = useState([
        { field: "coffee", cellRenderer: function(params:any) {
                return(<Link href="/calculator">{params.value}</Link>)
            } },
        { field: "roast"},
        { field: "origin" },
        { field: "variety" },
        { field: "process" },
        { field: "roaster" },
        { field: "tasteNotes" },
    ]);
    return(
        <div>
            <h1 className="text-4xl">
                Coffee Recipes
            </h1>
            <div className="ag-theme-quartz" style={{height:500}}>
                <AgGridReact rowData={rowData} columnDefs={colDefs} />
            </div>
        </div>
    )
}