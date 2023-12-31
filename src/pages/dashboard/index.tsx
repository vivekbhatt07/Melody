import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import LogoutIcon from "../../assets/images/logoutIcon.svg";
import {
  BasicInput,
  IconAction,
  ModalProvider,
  TableProvider,
} from "../../components";
import { styled } from "@mui/material/styles";
import UploadIcon from "../../assets/images/uploadIcon.svg";
import DeleteIcon from "../../assets/images/deleteIcon.svg";
import AudioPlayer from "./components/AudioPlayer.tsx";
import { tracks } from "./data/tracks.ts";
import { TrackType } from "../../types/index.ts";
// @ts-ignore
const Dashboard = ({ logOutHandler }) => {
  const [trackList, setTrackList] = useState<TrackType[]>(tracks);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<TrackType>(
    tracks[trackIndex]
  );

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteTrack = (trackId: string) => {
    setTrackList((prevTrackList) => {
      return prevTrackList.filter((track) => {
        return track.id !== trackId;
      });
    });
  };

  // @ts-ignore
  const [file, setFile] = useState({ name: "", path: "" });
  const [songData, setSongData] = useState({
    songName: "",
    songLink: "",
    songSource: "",
  });

  const addTrack = () => {
    setTrackList((prevTrackList) => {
      return [
        {
          id: uuidv4(),
          ...{
            title: songData.songName,
            thumbnail: file.path,
            source: songData.songSource,
            addedOn: "17/05/2022",
            src: songData.songLink,
          },
        },
        ...prevTrackList,
      ];
    });
    setFile({ name: "", path: "" });
    setSongData({
      songName: "",
      songLink: "",
      songSource: "",
    });
  };

  const handleSongData = (event: any) => {
    const { name, value } = event.target;
    setSongData((prevSongData) => {
      return { ...prevSongData, [name]: value };
    });
  };

  // @ts-ignore
  function handleChange(e: any) {
    // @ts-ignore
    setFile({
      name: e.target.files[0].name,
      path: URL.createObjectURL(e.target.files[0]),
    });
  }

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTrack();
    closeModal();
  };

  return (
    <div className="h-screen flex">
      <aside
        className="basis-1/6 flex flex-col justify-between"
        style={{ border: "1px solid #ddd" }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: 700,
              color: "#552583",
              padding: "32px 57px",
            }}
          >
            Logo
          </h1>
          <div>
            <NavLink
              to="/"
              className="flex items-center gap-1"
              style={({ isActive }) => ({
                display: "flex",
                fontWeight: 500,
                padding: "8px 24px",
                backgroundColor: isActive ? "#E6F7FF" : "#ffffff",
                color: isActive ? "#1890FF" : "#282828",
                borderRight: isActive ? "5px solid #1890FF" : "2px solid #fff",
              })}
            >
              <DashboardIcon sx={{ color: "#00000073" }} />
              <span>Songs</span>
            </NavLink>
          </div>
        </div>
        <div className="mb-4">
          <Button
            variant="text"
            sx={{
              color: "#000000D9",
              textTransform: "capitalize",
              gap: "10px",
              width: "100%",
              justifyContent: "flex-start",
              paddingLeft: "24px",
            }}
            onClick={() => logOutHandler()}
          >
            {" "}
            <img src={LogoutIcon} alt="logout" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="basis-5/6 flex flex-col justify-between">
        <div className="flex flex-col">
          {/* HEAD */}
          <div className="flex flex-col py-4 px-6 gap-4 outline-2 outline-[#ddd]">
            <div className="flex flex-row gap-2">
              <div
                className="text-[#00000073]"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                First-level Menu
              </div>
              <div
                className="text-[#00000073] flex items-center"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                <div>/</div>
                <div className="pl-2">Second-level Menu</div>
              </div>
              <div
                className="text-[#000000D9] flex items-center"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                <div>/</div>
                <div className="pl-2">Current Page</div>
              </div>
            </div>
            <div className="flex justify-end">
              <ModalProvider
                isOpen={isModalOpen}
                title="ADD SONG"
                closeModal={closeModal}
                OpenAction={
                  <Button
                    onClick={() => openModal()}
                    sx={{
                      textTransform: "capitalize",
                      color: "#000000",
                      backgroundColor: "#FDB927",
                      padding: "6px 16px",
                      fontSize: "14px",
                      lienHeight: "22px",
                      fontWeight: 400,
                      borderRadius: "2px",
                      "&:hover": {
                        backgroundColor: "#FDA600",
                      },
                    }}
                  >
                    Add Songs
                  </Button>
                }
              >
                <form
                  className="bg-[#fff] flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-6 px-8">
                    <BasicInput
                      labelText="Song Name"
                      placeholderText="Song Name"
                      name="songName"
                      value={songData.songName}
                      type="text"
                      handleChange={handleSongData}
                    />
                    <BasicInput
                      labelText="Song Link"
                      placeholderText="URL (https://www.computerhope.com/jargon/m/example.mp3)"
                      name="songLink"
                      type="url"
                      value={songData.songLink}
                      handleChange={handleSongData}
                    />
                    <BasicInput
                      labelText="Song Source"
                      placeholderText="Source Name"
                      name="songSource"
                      type="text"
                      value={songData.songSource}
                      handleChange={handleSongData}
                    />
                  </div>
                  <div className="flex flex-col gap-[26px] px-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-start">
                        <Button
                          component="label"
                          variant="outlined"
                          disabled={!!file.name}
                          startIcon={<img src={UploadIcon} alt="upload" />}
                          sx={{
                            borderRadius: "2px",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            textTransform: "capitalize",
                            color: "#000000D9",
                            border: "1px solid #D9D9D9",
                            "&:hover": {
                              backgroundColor: "#ddd",
                              boxShadow: "none",
                              border: "1px solid #D9D9D9",
                            },
                          }}
                        >
                          Click to Upload Profile Thumbnail
                          <VisuallyHiddenInput
                            type="file"
                            onChange={handleChange}
                          />
                        </Button>
                      </div>
                      {/* Added Image */}

                      {file.name && (
                        <div
                          className="flex p-2 border-1 border-[#ddd] justify-between"
                          style={{
                            border: "1px solid #D9D9D9",
                            borderRadius: "2px",
                          }}
                        >
                          <div className="flex gap-2 items-center">
                            <img
                              src={file.path}
                              width={48}
                              height={48}
                              alt="image"
                            />

                            <span
                              style={{
                                color: "#1890FF",
                                fontSize: "14px",
                                lineHeight: "22px",
                                fontWeight: 400,
                              }}
                            >
                              {file.name}
                            </span>
                          </div>
                          <IconAction
                            sx={{
                              backgroundColor: "transparent",
                              "&:hover": {
                                backgroundColor: "#ddd",
                              },
                            }}
                            onClick={() => setFile({ name: "", path: "" })}
                          >
                            <img src={DeleteIcon} alt="Delete Icon" />
                          </IconAction>
                        </div>
                      )}
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontWeight: 400,
                        color: "#00000073",
                      }}
                    >
                      Image has to be of aspect ratio 1:1 with a size of 3000
                      pixels x 3000 pixels
                    </p>
                  </div>
                  <div
                    className="flex justify-end py-[10px] px-4"
                    style={{ borderTop: "1px solid #D9D9D9" }}
                  >
                    <div className="flex gap-2">
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "2px",
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          textTransform: "capitalize",
                          color: "#000000D9",
                          border: "1px solid #D9D9D9",
                          "&:hover": {
                            backgroundColor: "#ddd",
                            boxShadow: "none",
                            border: "1px solid #D9D9D9",
                          },
                        }}
                        onClick={() => closeModal()}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          borderRadius: "2px",
                          backgroundColor: "#1890FF",
                          boxShadow: "none",
                          textTransform: "capitalize",
                          "&:hover": {
                            backgroundColor: "#1890FF",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </form>
              </ModalProvider>
            </div>
          </div>
          {/* BODY */}
          <div>
            <TableProvider
              data={trackList}
              deleteAction={deleteTrack}
              isPlaying={isPlaying}
              togglePlayPause={togglePlayPause}
              currentTrack={currentTrack}
              // @ts-ignore
              setCurrentTrack={setCurrentTrack}
            />
          </div>
        </div>
        <AudioPlayer
          tracks={trackList}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      </main>
    </div>
  );
};

export default Dashboard;
