import React from "react";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";


const FilteredMisdemeanourContext = React.createContext<MisdemeanourRecord[]>([]);

export default FilteredMisdemeanourContext;