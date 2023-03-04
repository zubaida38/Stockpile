<script>
	import { onMount } from 'svelte';
	import GitHub from "github-api";
	let sections = [];
	function getUserProjects(github_username) {
      const gh = new GitHub();
      let me = gh.getUser(github_username);
      me.listRepos({ sort: "updated", type: "public" }, (err, repos) => {
        if (!err) {
          let final_repos = [];
          for (let idx in repos) {
            let r = repos[idx];
            if (!r.archived && r.name != "jmoussa") {
              final_repos.push(r);
            }
          }
		  sections = final_repos;
		  return sections
        } else {
          console.err(err);
        }
      });
    }
	onMount(async () => {
		s = getUserProjects('jmoussa')
		console.log(s);
	});
	
</script>

<style scoped lang='scss'>
	$default_background: #30343F;
	$accent: #d447ba;
	.slider {
		font-family: 'Lato', sans-serif;
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		align-items: center;
		transition: all .2s ease-in-out; 	
		border-radius: 5%;
	}
	.slider:hover{
		transform: scale(1.03);
	}
	section {
		padding: 1rem;
		border-radius: 3rem;
		min-width: 345px;
		min-height: 530px;
		color: white;	
		scroll-snap-align: center;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 10px;
		p {
			text-align: justify;
			align-self: flex-start;
			padding: 1rem 3.4rem;
			margin-bottom: 15%;

		}
		ul {
			text-align: left;
			li {
				margin-left: 28px;
			}
		}
		.github-link {
			color: #30343F;
			font-family: Roboto, sans-serif;
			font-weight: normal;
			font-size: 16px;
			color: #FFFFFF;
		}
		.github-button {
			a {
				color: #FFFFFF;
				text-decoration: none;
				text-align: center;
				padding-left: 1rem;
				padding-right: 1rem;
				background: none;
			} 
			// margin: auto;	
			cursor: pointer;
			text-align: center;
			padding: 1rem 3rem;
			transition: all .2s ease-in-out; 	
			background: none;
			border: 2px solid white;
			border-radius: 2rem;
		}
		.github-button:hover {
			a {
				color: #FFFFFF;
				transform: scale(1.05);
			}
			background: $accent;
			transform: scale(1.05);

		}
		position: relative;
		border: 4px solid $accent;
		background-color: $default_background;
	}
	a {
		text-decoration: none;
	}
	.section-header{
		transform: translateY(-40%);
		padding-top: 75px;	
		text-align: center;
		cursor: pointer;
		// width: 100%;
		font-size: calc(0.5rem + 2vh);
		text-decoration: underline;
	}
	h4 {
		margin-top: 20px;
	}
</style>

<div class="slider">
	{#each sections as section}
		<section>
			<a class="github-link" href={section["svn_url"]}>
				<h1 class="section-header">
					{section['full_name']}
				</h1>
			</a>
			<p>{section['description']}</p>
			<button class="github-button">
				<a class="github-link" target="_blank" href={section["svn_url"]}>GitHub</a>
			</button>
			<!-- <h4>Tags</h4>	
			<ul>
				{#each section['topics'] as content}
					<li>{content}</li>
				{/each}
			</ul> -->
				
		</section>
	{/each}
</div>
