import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useSignoStore from "../store/useSignoStore";
import Avatar from "@mui/material/Avatar";

const CORES_ELEMENTO = {
  fogo: "#ff7043",
  terra: "#66bb6a",
  ar: "#ffd54f",
  água: "#4fc3f7",
};

export default function SignoModal() {
  const { signoSelecionado, limparSignoSelecionado } = useSignoStore();

  if (!signoSelecionado) return null;

  const previsao = signoSelecionado.previsao || signoSelecionado.previsão || "";
  const corDestaque = CORES_ELEMENTO[signoSelecionado.elemento] || "#9575cd";

  return (
    <Dialog
      open={signoSelecionado !== null}
      onClose={limparSignoSelecionado}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          bgcolor: "#1b1d2b",
          color: "#fff",
          borderRadius: 4,
          boxShadow: `0 0 35px ${corDestaque}66, 0 0 60px ${corDestaque}22`,
          border: `1px solid ${corDestaque}55`,
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: corDestaque,
        }}
      >
        {signoSelecionado.nome}
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 1,
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: `${corDestaque}22`,
            border: `2px solid ${corDestaque}`,
            boxShadow: `0 0 20px ${corDestaque}88`,
            mb: 2,
            fontSize: "2.2rem",
            animation: "flutuar 3s ease-in-out infinite",
            "@keyframes flutuar": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-10px)" },
            },
          }}
        >
          {signoSelecionado.icone}
        </Avatar>

        <Typography
          variant="subtitle2"
          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          gutterBottom
        >
          {signoSelecionado.data}
        </Typography>

        {/* AQUI ESTÁ A FRASE/PREVISÃO */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            width: "100%",
            textAlign: "center",
            lineHeight: 1.7,
            color: "#1b1d2b",
            bgcolor: "rgba(255, 255, 255, 0.95)",
            border: `1px solid ${corDestaque}88`,
            borderRadius: 2,
            px: 2.5,
            py: 2,
            boxShadow: `0 4px 16px ${corDestaque}22`,
          }}
        >
          {previsao || "A vibe do dia está se revelando..."}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            px: 2,
            py: 0.5,
            borderRadius: 10,
            bgcolor: `${corDestaque}22`,
            color: corDestaque,
            fontWeight: 500,
          }}
        >
          Humor do dia: {signoSelecionado.humor}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          onClick={limparSignoSelecionado}
          sx={{ color: corDestaque, fontWeight: "bold" }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
