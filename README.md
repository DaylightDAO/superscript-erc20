<!-- language: lang-none -->

    /$$$$$$                                                                        /$$             /  $$                                         /$$$$$$   /$$$$$$
    /$$__  $$                                                                      |__/            | $$                                        /$$__  $$ /$$$_  $$
    | $$  \__/ /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$$  /$$$$$$  /$$  /$$$$$$  /$$$$$$         /$$$$$$   /  $$$$$$   /$$$$$$$|__/  \ $$| $$$$\ $$
    |  $$$$$$ | $$  | $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/ /$$_____/ /$$__  $$| $$ /$$__  $$|_  $$_//$$$$$$ /$$__  $$ /$$__  $$ /$$_____/  /$$$$$$/| $$ $$ $$
    \____  $$| $$  | $$| $$  \ $$| $$$$$$$$| $$  \__/|  $$$$$$ | $$      | $$  \__/| $$| $$  \ $$  | $$ |______/| $$$$$$$$| $$  \__/| $$       /$$____/ | $$\ $$$$
    /$$  \ $$| $$  | $$| $$  | $$| $$_____/| $$       \____  $$| $$      | $$      | $$| $$  | $$  | $$ /$$     | $$_____/| $$      | $$      | $$      | $$ \ $$$
    |  $$$$$$/|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$       /$$$$$$$/|  $$$$$$$| $$      | $$| $$$$$$$/  |  $$$$/     |  $$$$$$$|  $$      |  $$$$$$$| $$$$$$$$|  $$$$$$/
    \______/  \______/ | $$____/  \_______/|__/      |_______/  \_______/|__/      |__/| $$____/    \___/        \_______/|__/       \_______/|________/ \______/
                      | $$                                                            | $$
                      | $$                                                            | $$
                      |__/                                                            |__/

**Token Name**\
TBD by Superscripters

**Token Symbol** - `between 3-10 characters`\
TBD by Superscripters

**Token decimals**\
18

**Initial Supply**\
100000

**Supply Type** - `Fixed, Unlimited, Capped`\
Capped

**Access Type** - `None, Ownable, Role Based`\
Role Based

**Transfer Type** - `Unstoppable, Pausable`\
Unstoppable

**Verified Source Code**\
What do we need to do to verify this on blockscanners?

**Burnable**\
Yes

**Mintable**\
Yes

**ERC1363**\
Yes

**To Deploy**
```bash
npx hardhat run scripts/deploy.ts --network ropsten
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```
