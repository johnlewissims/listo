<template>
    <Page class="add">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Label text="Post a Message" class="heading" />
                <StackLayout class="form-wrap">
                    <StackLayout class="input-field">
                        <TextField class="input" hint="Message"
                            v-model="message" />
                        <StackLayout class="hr-light" />
                    </StackLayout>

                    <Button text="Submit Message" @tap="submit" class="btn" />
                </StackLayout>
            </StackLayout>

        </FlexboxLayout>
    </Page>
</template>

<script>
    import axios from "../axios";
    export default {
        data() {
            return {
                message: ""
            };
        },
        methods: {
            submit() {
                //console.log(this.message);
                axios({
                        method: "POST",
                        url: "http://3.95.16.183/api/listing",
                        headers: {
                            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjk1LjE2LjE4M1wvYXBpXC9yZWdpc3RlciIsImlhdCI6MTU4MDQwMDY5MSwibmJmIjoxNTgwNDAwNjkxLCJqdGkiOiJicVpNV01xRzFURDIyeEpSIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.unZ6PzRysmjGJXUtJmdp8XkYv6gPeFYGn8gizEXkWwM"
                        },
                        data: {
                            item: this.message
                        }
                    })
                    .then(result => {
                        this.$navigator.navigate("/home");
                        //console.log("test");
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    };
</script>

<style scoped>
    * {
        font-family: 'Futura';
    }

    .add {
        padding: 15px;
        margin-top: 50px;
        background: #F7F2F3;
    }

    .heading {
        text-align: center;
        font-size: 30px;
        text-transform: uppercase;
        padding-top: 50px;
        padding-bottom: 15px;
        color: #0A0908;
        width: 100%;
    }

    .board {
        background: #fff;
        margin-top: 50px;
    }

    .form-wrap {
        padding: 50px;
    }

    .btn {
        background: #660000;
        color: #fff;
        text-transform: uppercase;
    }
</style>
