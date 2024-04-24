import { articleOsszeallit } from "./fuggvenyek.js";
import { tetkokLISTA } from "./adat.js";

const kartyakELEM = $(".cards");
kartyakELEM.html(articleOsszeallit(tetkokLISTA));
