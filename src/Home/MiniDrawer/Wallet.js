import { BasicTable } from "../UI/Table";
import BackupTableIcon from "@mui/icons-material/BackupTable";
export const style = { color: "#80808a", fontSize: "2rem" };
function Wallet() {
  const secondaryHeader = ["currency", "Balance", "Pending"];
  return (
    <div>
      <BasicTable
        Headerlogo={<BackupTableIcon style={style} />}
        HeaderText1={"Wallet"}
        secondaryHeader={"Acount"}
      />
    </div>
  );
}

export { Wallet };
