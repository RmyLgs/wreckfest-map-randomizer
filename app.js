// ARRAYS

const tracks = [
  {
    name: "el_add=bigstadium_demolition_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=bigstadium_figure_8",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=6",
  },
  {
    name: "el_add=bonebreaker_valley_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=5",
  },
  {
    name: "el_add=crash_canyon_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=5",
  },
  {
    name: "el_add=crm01_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=crm01_5",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=crm01_3",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=crm02_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=dirt_speedway_dirt_oval",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=8",
  },
  {
    name: "el_add=dirt_speedway_figure_8",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=8",
  },
  {
    name: "el_add=forest11_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=5",
  },
  {
    name: "el_add=field_derby_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields08_1",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
    laps: "el_laps=4",
  },
  {
    name: "el_add=fields08_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=4",
  },
  {
    name: "el_add=fields13_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=4",
  },
  {
    name: "el_add=fields09_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=6",
  },
  {
    name: "el_add=fields10_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
    laps: "el_laps=6",
  },
  {
    name: "el_add=fields10_2 ",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest12_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields11_1",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields12_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields12_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields12_2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields13_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields13_2",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields14_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=fields14_2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest11_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=gravel1_main_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest11_2_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest12_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest13_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest13_2_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=grass_arena_demolition_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=gravel1_main_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed3_short_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed5_outer_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed1_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest11_2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed1_main_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed2_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed3_long_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed3_long_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest13_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed3_r3",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed3_r3_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed3_short_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed7_r3",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed4_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed8_r1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed4_main_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed5_outer_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed5_inner_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed5_inner_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed5_free_route",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed7_r1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed7_r2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed7_r2_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest12_2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed7_r3_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed8_r2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed2_main_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit1_short_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed8_r3_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed9_r1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit2_full_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed9_r1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mudpit_demolition_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=rt01_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=mixed7_r1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit1_long_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit1_short_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit1_alt_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit1_alt_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit2_full_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit2_2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac3_short_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit3_long_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit3_long_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit3_short_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit3_short_loop_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=smallstadium_demolition_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway1_figure_8",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway1_oval",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=forest13_2",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: " ",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway2_classic_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=urban08_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway2_demolition_arena",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway2_figure_8",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit1_long_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway2_inner_oval",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac3_main_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway2_outer_oval",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=sandpit2_2_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=speedway2_oval_loop",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac1_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac1_main_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac1_short_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac2_main_circuit_tourney",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac3_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac3_short_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac1_short_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=triangle_r1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac2_main_circuit",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=triangle_r2",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=urban06",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=urban08_1_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=urban09_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=urban09_2",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=wrecker01_1",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
  {
    name: "el_add=urban07",
    type: "el_gamemode=derby deathmatch",
    weather: "el_weather=",
  },
  {
    name: "el_add=tarmac2_main_circuit_rev",
    type: "el_gamemode=racing",
    weather: "el_weather=",
  },
];

const tracksRandomised = [...tracks];

// HTML
const btnRandom = document
  .querySelector("#btn-random")
  .addEventListener("click", randomiser);

const btnCopy = document
  .querySelector("#btn-copy")
  .addEventListener("click", () => {
    textArea.select();
    document.execCommand("copy");
  });

const textArea = document.querySelector("textarea");

// FUNCTIONS
function randomiser() {
  //GO RANDOM !
  tracksRandomised.sort((a, b) => Math.random() - 0.5);

  //PUSHED IN HTML
  let i = 1;
  let txt = null;
  textArea.textContent = "";

  tracksRandomised.forEach((track) => {
    txt = textArea.textContent;
    laps = track.laps ? `${track.laps}` : "";

    textArea.textContent = `${txt}
## TRACK ${i++}
${track.name}
${track.type}
${track.weather}
${track.laps === undefined ? "" : `${track.laps}`}`;
  });
}
