import React from "react";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";

const MisdemeanourContext = React.createContext<MisdemeanourRecord[]>([]);

export default MisdemeanourContext;