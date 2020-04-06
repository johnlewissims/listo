<template>
    <Page class="home">
        <FlexboxLayout flexDirection="column" class="home-1">
            <Label :text="title" class="heading" />
            <GridLayout class="home-2">
                <ListView for="task in items" class="board">
                    <v-template>
                        <FlexboxLayout justifyContent="space-between" alignItems="flex-start" width="400" class="list-group-item">
                            <Label :text="task.item" />
                            <Label text="X" class="delete" @tap="deleteNote(task.id)"/>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </GridLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from '../components/Home'
    import axios from "../axios";
    export default {
        data() {
            return {
                title: "Listo",
                items: []
            };
        },
        methods: {
          deleteNote(id) {
            axios({
                method: "POST",
                url: `http://3.95.16.183/api/delete/${id}`,
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjk1LjE2LjE4M1wvYXBpXC9yZWdpc3RlciIsImlhdCI6MTU4MDQwMDY5MSwibmJmIjoxNTgwNDAwNjkxLCJqdGkiOiJicVpNV01xRzFURDIyeEpSIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.unZ6PzRysmjGJXUtJmdp8XkYv6gPeFYGn8gizEXkWwM"
                }
            }).then(result => {
                console.log(result.data)
                this.$navigateTo(Home, {transition:{ name:'fade', duration: 200 }});
            });
          },
          load() {
            axios({
                method: "GET",
                url: "http://3.95.16.183/api/listing",
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjk1LjE2LjE4M1wvYXBpXC9yZWdpc3RlciIsImlhdCI6MTU4MDQwMDY5MSwibmJmIjoxNTgwNDAwNjkxLCJqdGkiOiJicVpNV01xRzFURDIyeEpSIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.unZ6PzRysmjGJXUtJmdp8XkYv6gPeFYGn8gizEXkWwM"
                }
            }).then(result => {
                this.items = result.data;
            });
          }
        },
        mounted() {
          this.load()
        }
    };
</script>

<style scoped>
    * {
        font-family: 'Futura';
    }

    .home {
        padding: 15px;
        margin-top: 50px;
        background: #F7F2F3;
    }

    .home-1 {
        margin-top: 50px;
    }

    .home-2 {
        padding-left: 50px;
        padding-right: 50px;
    }

    .heading {
        text-align: center;
        font-size: 30px;
        text-transform: uppercase;
        padding-top: 15px;
        padding-bottom: 15px;
        color: #0A0908;
    }

    .board {
        background: #fff;
        margin-top: 50px;
    }
</style>
