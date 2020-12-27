import * as React from "react";
import SimpleDialog from "mui-simple-dialog";

export default function RawFileDialog(props: {
  children: React.ReactNode;
  title: string;
  endpoint: string;
}): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [rawFileContents, setRawFileContents] = React.useState("");

  async function getFileContents() {
    const res = await fetch(props.endpoint);
    const resTxt = await res.text();
    setRawFileContents(resTxt);
  }

  React.useEffect(() => {
    if (!open) {
      return;
    }

    // Only request file contents if dialog is open
    getFileContents();
  }, [open]);

  return (
    <SimpleDialog
      title={props.title}
      description={
        <div style={{ whiteSpace: "pre-line" }}>{rawFileContents}</div>
      }
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {props.children}
    </SimpleDialog>
  );
}
