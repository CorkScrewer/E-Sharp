# 1 - Rock
# 2 - Paper
# 3 - Scissors

49,32,45,32, 82,111,99,107,10,
50,32,45,32, 80,97,112,101,114,10,
51,32,45,32, 83,99,105,115,115,111,114,115,10,10,

80,49,58,32,
$0        # Player 1 input.
@99 10,

80,50,58,32,
$1        # Player 2 input.
@99 10,

@10 1   # R
@11 2   # P
@12 3   # S

? &0 &10 {
    ? &1 &10 {
        @99 68,
    }
    ? &1 &11 {
        @99 2;
    }
    ? &1 &12 {
        @99 1;
    }
}
? &0 &11 {
    ? &1 &11 {
        @99 68,
    }
    ? &1 &12 {
        @99 2;
    }
    ? &1 &10 {
        @99 1;
    }
}
? &0 &12 {
    ? &1 &12 {
        @99 68,
    }
    ? &1 &10 {
        @99 2;
    }
    ? &1 &11 {
        @99 1;
    }
}