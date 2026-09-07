import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const CORES_ELEMENTOS = {
  fogo: { bg: "#ffebee", accent: "#e57373" },
  terra: { bg: "#f1f8e9", accent: "#81c784" },
  ar: { bg: "#e3f2fd", accent: "#64b5f6" },
  água: { bg: "#e0f7fa", accent: "#9575cd" },
};

export default function SignoCard({ nome, data, icone, elemento, onClick }) {
  const [flipped, setFlipped] = useState(false);
  const corGlow = CORES_ELEMENTOS[elemento]?.accent || "#9575cd";

  const handleClick = () => {
    setFlipped(true);
    setTimeout(() => {
      onClick(); // AQUI chama o setSignoSelecionado(signo) que veio da Home
      setFlipped(false);
    }, 700);
  };

  return (
    <Box sx={{ width: "100%", aspectRatio: "1 / 1", perspective: "1000px" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s, box-shadow 0.4s ease",
          transform: flipped ? "rotateY(180deg)" : "none",
          borderRadius: 3,
          boxShadow: flipped
            ? `0 0 25px 4px ${corGlow}88, 0 0 50px 10px ${corGlow}44`
            : "none",
          "&:hover": {
            boxShadow: `0 0 18px 3px ${corGlow}aa, 0 0 36px 8px ${corGlow}66`,
          },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 3,
            backfaceVisibility: "hidden",
            bgcolor: flipped ? corGlow : undefined,
            transition: "border-color 0.4s ease",
          }}
        >
          <CardActionArea
            onClick={handleClick}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5">{icone}</Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {nome}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {data}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 3,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            bgcolor: corGlow,

            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ px: 2, textAlign: "center" }}>
            Revelando sua vibe... ✨
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}
