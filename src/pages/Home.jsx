import { Box, Typography } from "@mui/material";
import { listaSignos } from "../utils/dadosSignos";
import SignoCard from "../components/SignoCard";
import SignoModal from "../components/SignoModal";
import useSignoStore from "../store/useSignoStore";

const Home = () => {
  const { setSignoSelecionado } = useSignoStore();

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontFamily: "serif",
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          mb: 4,
        }}
      >
        Vibe do Dia
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sx: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
          maxWidth: 700,
          mx: "auto",
        }}
      >
        {listaSignos.map((signo) => (
          <SignoCard
            key={signo.id}
            nome={signo.nome}
            data={signo.data}
            icone={signo.icone}
            elemento={signo.elemento}
            onClick={() => setSignoSelecionado(signo)}
          />
        ))}
      </Box>
      <SignoModal />
    </Box>
  );
};

export default Home;
