.PHONY: swa client server storybook

swa:
	swa start http://localhost:5173 --api-devserver-url http://localhost:7071

client:
	cd client && pnpm run dev

server:
	cd server && func start

storybook:
	cd client && pnpm run storybook